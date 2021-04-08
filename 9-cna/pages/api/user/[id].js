export default (req, res) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${req.query.id}`)
    .then(response => response.json())
    .then(data => res.json(data))
}
