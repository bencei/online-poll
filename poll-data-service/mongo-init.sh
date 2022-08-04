mongo <<EOF
db = db.getSiblingDB('poll')

db.createUser({
  user: 'poll',
  pwd: 'poll123',
  roles: [{ role: 'readWrite', db: 'poll' }],
});
db.createCollection('deleteMe')
EOF