FROM amazonlinux:2023

RUN yum update -y
RUN yum groupinstall -y "Development Tools" -y
RUN yum install openssl-devel libffi-devel bzip2-devel wget -y
RUN cd /opt && \
    wget https://www.python.org/ftp/python/3.11.0/Python-3.11.0.tgz && \
    tar xzf Python-3.11.0.tgz && \
    cd Python-3.11.0 &&\
    ./configure --enable-optimizations &&\
    make -j $(nproc) && \
    make altinstall &&\
    rm -f /opt/Python-3.11.0.tgz

RUN yum install python3-pip -y
# setup nodejs and required node global dependencies

RUN curl -sL https://rpm.nodesource.com/setup_18.x | bash -

RUN yum install -y nodejs

RUN yum -y install gcc-c++ make

RUN npm i -g yarn

RUN node --version

#install nestjs globally
RUN npm i -g @nestjs/cli