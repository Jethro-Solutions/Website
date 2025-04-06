const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const Contact = require('../models/Contact');

// Mock user for authentication
let token;

beforeAll(async () => {
  // Register a test admin user and get token
  const res = await request(app)
    .post('/api/auth/register')
    .send({
      name: 'Test Admin',
      email: 'admin@test.com',
      password: 'password123',
      role: 'admin'
    });
  
  token = res.body.token;
});

// Clean up the database after all tests
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Contact API', () => {
  // Test creating a contact
  it('should create a new contact', async () => {
    const res = await request(app)
      .post('/api/contacts')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        message: 'This is a test message',
        company: 'Test Company'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('name', 'John Doe');
  });

  // Test get all contacts (needs authentication)
  it('should get all contacts', async () => {
    const res = await request(app)
      .get('/api/contacts')
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('count');
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  // Test unauthorized access
  it('should not allow unauthorized access to get all contacts', async () => {
    const res = await request(app)
      .get('/api/contacts');
    
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('success', false);
  });
}); 