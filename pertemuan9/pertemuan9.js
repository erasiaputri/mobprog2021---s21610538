// Javascript Modules: Export & Import

/*
    When we encounter a big application and complex
    we need to crack codes into a few files base on 
    their contexts, this is what we know as "modules"
*/ 

/*
    Before ES6, Javascript didn't have internal 
    features to crack codes into separate modules,
    then an external library was founded which
    could help fix these problems, one of the most
    famous among them is the "requirejs."

    Starting out in ES6, Javascript started to introduce the
    use of module features in which one module = 1 file. The 
    module could be loaded using specific keywords which is
    known as "export" and "import". 

*/

//Export
export function hello(user){
    alert(`Hello, ${user}!`);
}



