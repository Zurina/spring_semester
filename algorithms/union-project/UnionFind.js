class UnionFind {
    constructor(count) {
        var count = count
        var pointSets = new Array(count)
        for (let i = 1; i <= n; i++) {
            pointSets[i] = i;
        }
    }
    union(p, q) {
        let setOfP = pointSets[p]
        let setOfQ = pointSets[q]

        for (var i = 1; i <= pointSets.length; i++) {
            if(pointSets[i] == setOfP) pointSets[i] = setOfQ
        }
        count--;
    }
    
    find(p) {
        return pointSets[p]
    }

    connected(p, q) {
        return this.find(p) == this.find(q)
    }

    count() {
        return this.count

  }
}
  