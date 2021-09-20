const students = [
    {
        'id' : 1,
        'name' : 'IronMan',
        'games' : ['tennis', 'football'],
        'selected' : false
    },
    {
        'id' : 2,
        'name' : 'Hulk',
        'games' : ['tennis', 'football', 'Cricket'],
        'selected' : false
    },
    {
        'id' : 3,
        'name' : 'SpiderMan',
        'games' : ['tennis',],
        'selected' : false
    },
    {
        'id' : 4,
        'name' : 'SuperMan',
        'games' : [],
        'selected' : false
    },
    {
        'id' : 5,
        'name' : 'Thor',
        'games' : ['tennis', 'football', 'Cricket'],
        'selected' : false
    },
]

export default{

    getStudents(){
        return students;
    }

}
