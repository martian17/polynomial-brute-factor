FROM node:latest


LABEL version="0.0.1" \
    author="Author Sable" \
    docker_build="docker build -t polynomial-brute ." \
    docker_run_basic="docker run --rm polynomial-brute -h"
    
COPY [".", "/polynomialbrute"]

ENV PATH={$PATH}:/polynomialbrute

WORKDIR /polynomialbrute

ENTRYPOINT ["main.js"]
