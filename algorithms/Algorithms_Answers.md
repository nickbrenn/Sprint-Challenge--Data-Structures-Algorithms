Add your answers to the Algorithms exercises here.

Exercise I:
a: O(n^n)
b: this questions makes no sense to me
c: O(n)
d: O(n^2)
e: O(n^n)
f: O(n^2)
g: O(log n)

Exercise II:
a:
function linAlg(a, j){
let min = a[0];
for(let i = 0; i < j; i++){
if(a[i] < min){
min = a[i]
}
}
return a[j] - min;
}

b: Don't understand this question. Am I minimizing the number of broken eggs? Are all the eggs gonna be thrown off one floor? The question says "minimize the number of dropped eggs", which implies some eggs won't be dropped. And if dropped is supposed to mean "broken", then it means that some eggs won't be broken, which means they will be thrown off more than one floor???

Exercise III:
a: O(n) because it'd have to run once for every item in the array;
b: Then it'd be O(n) since it'd only every run once, so it'd be equivalent to the runtime of a single for loop.
