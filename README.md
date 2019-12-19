# xorwow
This is a JavaScript implementation of the "xorwow" pseudo-random number generator.

I'm using this implementation in cases where I need pseudo-random numbers, but I also want to be able to reproduce the exact same sequence of values.

Do not rely on this code if you need truly random numbers! Instead consider crypto.getRandomValues() or the random.org API. The only validation I've done on the implementation is spot-checking against a C implementation and looking at a histogram of 100, 50k, and 500k values.

See here for a description:
https://en.wikipedia.org/wiki/Xorshift#xorwow
