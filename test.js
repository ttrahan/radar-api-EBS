var superagent = require("superagent");
var chai = require("chai");
var expect = chai.expect;
var should = require("should");
var token = process.env.TOKEN;

describe("Index", function() {
  it("renders something", function(done) {
    superagent.get("http://localhost:3001/")
    .end(function(err, res) {
      (err === null).should.equal(true);
      res.statusCode.should.equal(200);
      done();
    });
  });
});

describe("Open issues", function() {
  it("renders open issues info", function(done) {
    superagent.get("http://localhost:3001/issues?repo=shippable/support"+
      "&token=" + token + "&days=2&daysEnd=5&state=Open")
    .end(function(err, res) {
      (err === null).should.equal(true);
      res.should.be.json;
      res.text.should.containEql("open");
      res.statusCode.should.equal(200);
      done();
    });
  });
});

describe("Closed issues", function() {
  it("renders closed issues info", function(done) {
    superagent.get("http://localhost:3001/issues?repo=shippable/support&"+
      "&token=" + token + "&days=2&daysEnd=5&state=Close")
    .end(function(err, res) {
      (err === null).should.equal(true);
      res.should.be.json;
      res.text.should.containEql("close");
      res.statusCode.should.equal(200);
      done();
    });
  });
});

describe("Failed auth", function() {
  it("Should not render issues page, instead main page", function(done) {
    superagent.get("http://localhost:3001/issues?repo=shippable/support&token=no&days=2&daysEnd=5&state=Open")
    .end(function(err, res) {
      res.text.should.not.containEql("open");
      res.text.should.not.containEql("close");
      done();
    });
  });
});
