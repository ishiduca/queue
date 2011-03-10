function queue (ary) {
    var F = function () {};
    F.prototype = ary || [];
    F.prototype.work = function (callback) {
        if (this.length > 0) {
            var job = this.shift();
            callback(job);
            return this;
        }
        return undefind;
    };
    return new F;
}

function test () {
    var ary = ('javascript ruby python perl node.js').split(/\s+/);
    var q = queue(ary);
    q.push('spidermonkey');
    while (q.length) {
        q.work(function (str) {
            console.log([ 'Hello', str, '!!' ].join(' '));
        });
    }
}

// test ();
// Hello javascript !!
// Hello ruby !!
// Hello python !!
// Hello perl !!
// Hello node.js !!
// Hello spidermonkey !!
