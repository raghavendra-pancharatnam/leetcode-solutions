function countCompleteComponents(n: number, edges: number[][]): number {
    let g = Array.from({ length: n }, () => []) // adjacency list
    let outdegree = new Array(n).fill(0)
    let indegree = new Array(n).fill(0)

    for (let [u, v] of edges) {
        g[u].push(v)
        outdegree[u]++
        indegree[v]++

        g[v].push(u)
        outdegree[v]++
        indegree[u]++
    }

    let gvis = new Array(n).fill(false)
    let vis = new Array(n).fill(false)

    function dfs(u, path) {
        // if (u === destination) {
        //     res.push([...path])
        //     return
        // }

        for (let v of g[u]) {
            if (vis[v]) continue
            gvis[v] = true

            vis[v] = true
            path.push(v)

            dfs(v, path)

            // path.pop()
            // vis[v] = false
        }
    }

    let ct = 0 // completd connected components

    for (let u = 0; u < n; u++) {
        if (gvis[u]) continue

        gvis[u] = true
        let path = []
        dfs(u, path)

        let outdegreeExp = path.length - 1
        let indegreeExp = path.length - 1
        let good = true

        for (let t of path) {
            if (outdegree[t] !== outdegreeExp) {
                good = false
                break
            }
            if (indegree[t] !== indegreeExp) {
                good = false
                break
            }
        }

        if (good) {
            ct++
        }
    }

    return ct
};
