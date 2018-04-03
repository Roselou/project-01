function index (req, res){
	res.json({
		message: 'Welcome to our website',
		documentation_url: 'https://github.com/roselou/project-01',
		base_url: 'localhost:3000',
		endpoints: [
		{
			method: 'GET', path: '/api', description: 'Describes all available endpoints'
		}]
	});
};

module.exports = {
	index: index
}