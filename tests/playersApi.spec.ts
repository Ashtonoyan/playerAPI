import { test, expect } from '@playwright/test';

let playerId: number;

test.describe.serial('Players API', () => {
  test('post player', async ({ request }) => {
    const response = await request.post('/players', {
      data:{
        name:'Leo Messi',
        team: 'Inter Miami',
        position: 'RW',
        goals: 10
      }
    })
    expect(response.status()).toBe(201);
    const player = await response.json();
    playerId = player.id;
  })
  test('get players', async ({ request }) => {
    const response = await request.get(`/players/${playerId}`)
    expect(response.status()).toBe(200);

    const player = await response.json();
    expect(player.id).toBe(playerId);
    expect(player.name).toBe('Leo Messi');
    expect(player.team).toBe('Inter Miami');
    expect(player.position).toBe('RW');
    expect(player.goals).toBe(10);
  })

  test('update player', async ({ request }) => {
    const response = await request.put(`/players/${playerId}`, {
      data:{
        name:'Leo Messi',
        team: 'Inter Miami',
        position: 'RW',
        goals: 25
      }
    })
    expect(response.status()).toBe(200);
  })

  test('delete player', async ({ request }) => {
    const response = await request.delete(`/players/${playerId}`)
    expect(response.status()).toBe(204);
  })
})