# Question

Suppose you have a database with three tables: "users", "orders", and "products". The "users" table contains columns id, name, and email. The "orders" table contains columns id, user_id, product_id, quantity, and created_at. The "products" table contains columns id, name, price, and category.

Write a single SQL query that returns a list of all users who have made at least 3 orders in the "Electronics" category and have spent more than $1000 on those orders, sorted by the total amount they have spent in descending order. The output should include the user's name, email, and the total amount they have spent on "Electronics" orders.

# Answer

SELECT 
	users.name, email, SUM(quantity * price) as orderTotal
FROM
	users
RIGHT JOIN 
	orders on orders.user_id = users.id 
LEFT JOIN 
	products on orders.product_id = products.id
WHERE
	category = 'Electronics'
GROUP BY 
	users.id
HAVING
	orderTotal > 10000 AND COUNT(orders.id) >= 3
ORDER BY
	orderTotal DESC;