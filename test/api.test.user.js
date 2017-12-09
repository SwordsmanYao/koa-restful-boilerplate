import app from '../server/';
import supertest from 'supertest';
import { expect, should } from 'chai';

const temp = {};
const request = supertest.agent(app.listen());
should();

describe('POST api/authenticate', () => {
  it('should get all cities', done => {
    request
      .post('/api/authenticate')
      .set('Accept', 'application/json')
      .send({
        password: 'password'
      })
      .expect(200, (err, res) => {
        temp.token = res.body.token;
        done();
      });
  });
});

describe('POST /user', () => {
  it('should add a user', done => {
    request
      .post('/api/user')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${temp.token}`)
      .set('Accept', 'application/json')
      .send({
        LoginName: 'Bangkok',
        name: 'Thailand',
        sex: 1
      })
      .expect(200, (err, res) => {
        temp.idUser = res.body._id;
        done();
      });
  });
});

