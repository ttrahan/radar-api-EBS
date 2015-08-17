FROM aye0aye/demobase:master.5

RUN mkdir -p /root/radar-api
ADD . /root/radar-api/

# Install app dependencies
RUN cd /root/radar-api; npm install

ENTRYPOINT ["/root/radar-api/boot.sh"]