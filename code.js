function augmentingPath(graph, start, end) {
    visited = new Map
    pathlist = []
    pathlist.push(start)
    final = {list: [], flow: 0}
    if(start == end) return [start]
    recursiveAugment(graph, visited, start, end, pathlist, 0, final)
    return final.list;
}


/*
function dfs(start, end, visited, adjlist, localpathlist){
    if(start == end){
        return;
    }
    visited[start] = true;
    for(let i=0; i < adjlist{})
}*/

/*var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};*/
/*
var graph = {'foo': {'boo': 7, 'd': 4},
    'boo': {'foo': 3},
    'd': {'e': 4},
    'e': {'bar': 1},
    'bar': {'foo': 2}};
*/
function recursiveAugment(graph, visited, source, sink, pathlist, flow, final){
    if (source == sink){
        if(final.flow < flow){
            final.list = [...pathlist]
            final.flow = flow
        }
    }
    visited.set(source, true)
    for (let value in graph[source]){
        if (!(visited.has(value) && visited.get(value) == true)){
            pathlist.push(value)
            flow += graph[source][value]
            recursiveAugment(graph, visited, value, sink, pathlist, flow, final)
            pathlist.splice(pathlist.indexOf(value, 1))
        }
    }
    visited.set(source, false)
}

/*
visited = new Map
pathlist = []
pathlist.push('foo')
final = {list: [], flow: 0}
recursiveAugment(graph, visited, 'foo', 'bar', pathlist, 0, final)
console.log(augmentingPath(graph, 'foo', 'foo'))
*/