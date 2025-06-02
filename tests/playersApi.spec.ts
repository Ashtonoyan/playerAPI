import { test, expect } from '@playwright/test';
import {client} from "../src/db";
import {DataFactory} from "../src/data";
let playerId: number;

test.describe('Players API', () => {
  test.beforeAll(async () => {
    await client.connect();
  })
  test.afterAll(async () => {
    await client.end();
  })
  test('post player', async ({ request }) => {
    const playerData = DataFactory.postData()
    const response = await request.post('/players', {
      data: playerData
    })
    expect(response.status()).toBe(201);
    const player = await response.json();
    playerId = player.id;

    const db = await client.query('SELECT * FROM players ' +
        'WHERE id=$1', [playerId]);
    expect(db.rows[0].name).toBe(playerData.name);
  })
  test('get players', async ({ request }) => {
    const data = await client.query('SELECT * FROM players ORDER BY id DESC LIMIT 1');

    const dataId = data.rows[0].id;
    const dataName = data.rows[0].name;
    const dataTeam = data.rows[0].team;
    const position = data.rows[0].position;
    const goals = data.rows[0].goals;

    const response = await request.get(`/players/${dataId}`)
    expect(response.status()).toBe(200);

    const player = await response.json();
    expect(player.id).toBe(dataId);
    expect(player.name).toBe(dataName);
    expect(player.team).toBe(dataTeam);
    expect(player.position).toBe(position);
    expect(player.goals).toBe(goals);
  })



  test('update player', async ({ request }) => {
    const data = await client.query('SELECT * FROM players ORDER BY id DESC LIMIT 1');
    const dataId = data.rows[0].id;
    const playerData = DataFactory.updateData()


    const response = await request.put(`/players/${dataId}`, {
      data: playerData

    })
    expect(response.status()).toBe(200);

    const db = await client.query('SELECT * FROM players ' +
        'WHERE id=$1', [dataId]);

    expect(db.rows[0].name).toBe(playerData.name);
    expect(db.rows[0].team).toBe(playerData.team);
    expect(db.rows[0].position).toBe(playerData.position);
    expect(db.rows[0].goals).toBe(playerData.goals);
  })

  test('delete player', async ({ request }) => {
    const data = await client.query('SELECT * FROM players LIMIT 1');
    const dataId = data.rows[0].id;

    const response = await request.delete(`/players/${dataId}`)
    expect(response.status()).toBe(204);

    const db = await client.query('SELECT * FROM players ' +
        'WHERE id=$1', [dataId]);
    expect(db.rows.length).toBe(0);
  })
})