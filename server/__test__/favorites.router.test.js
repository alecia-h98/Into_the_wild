import request from 'supertest';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '../routes/favorites.router';
import pool from '../modules/pool';

//this is testing my favorites GET function within my FAVORITES 

export const rejectUnauthenticated = (req, res, next) => {
    req.user = { id: 2 }; // Mock user
    next();
  };
  
vi.mock('../db.js', async (importOriginal) => {
  const actualDb = await importOriginal();
  return {
    ...actualDb,
    default: {
      query: vi.fn(),
    },
  };
});

// vi.mock('../db.js')

describe('GET /api/favorites', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return a list of favorited items', async () => {
    //Mock database response
    pool.query.mockResolvedValue({
      rows: [
        {
          is_favorited: true,
          user_id: 2,
          item_id: 15,
          name: 'Favorite Item',
          photo: '/image/image.jpg',
          id: 1
        },
      ],
    });


const response = await request(app).get('/api/favorites');


expect(response.status).toBe(200);
expect(response.body).toEqual([
  {
    is_favorited: true,
    user_id: 2,
    item_id: 15,
    name: 'Favorite Item',
    photo: '/image/image.jpg',
    id: 1,
  },
]);
expect(pool.query).toHaveBeenCalledWith(expect.any(String), [1]);
});

it('should handle database errors', async () => {
  pool.query.mockRejectedValue(new Error('Database error'));

  const response = await request(app).get('/api/favorites');

  expect(response.status).toBe(500);
});
});
