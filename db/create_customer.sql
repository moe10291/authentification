INSERT INTO customer
(email, hash_value)
VALUES 
($1, $2)
RETURNING *;