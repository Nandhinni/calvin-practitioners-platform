const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function retrieveAllUsers(domain, done) {
   // Call communities service to get all the templates
  //console.log(domain);
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communityrole/${domain}`;
  request
 .get(url)
 .query({ domain }) // query string
 .end((err, res) => {
   if (err) {
    // console.log('server.controller file');
     return done(err);
   }
   //console.log('server.controller  success file');

   return done(null, res.body);
 });
}
function retrieveAllRoles(domain, done) {
   // Call communities service to get all the templates
  //console.log(domain);
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communityrole/${domain}?onlyroles=true`;
  request
 .get(url)
 .query({ domain }) // query string
 .end((err, res) => {
   if (err) {
     //console.log('server.controller file');
     return done(err);
   }
  //  console.log(res.body, 'sdvsdv');
  //  console.log('server.controller  success file');

   return done(null, res.body);
 });
}

function updateActions(domain, role, values, done) {
   // Call communities service to get all the templates
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communityrole/${domain}/roles/${role}`;
  request
 .patch(url)
 .send(values) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
   return done(null, res.body);
 });
}

function createRole(domain, values, done) {
   // Call communities service to get all the templates
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communityrole/${domain}`;
  request
 .post(url)
 .send(values) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
   return done(null, res.body);
 });
}


module.exports = {
  retrieveAllUsers,
  retrieveAllRoles,
  updateActions,
  createRole,
};
