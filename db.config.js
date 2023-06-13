const config ={
HOST:"127.0.0.1",
USER:"root",
PASSWORD:"miguelito0",
DB:"cursos",
dialect:"mysql",
pool:{
    max:5,
    min:0,
    acquiere:30000,
    idle:10000,
}, 
};

export default config;
