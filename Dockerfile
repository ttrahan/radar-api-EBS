FROM aye0aye/demobase:master.5

RUN mkdir -p /root/radar-api
ADD . /root/radar-api/

ENV NODE_ENV="dev" CONSOLE_LOGLEVEL="debug" FILE_LOG="false"

# Install app dependencies
RUN cd /root/radar-api; npm install

ENTRYPOINT ["/root/radar-api/boot.sh"]
