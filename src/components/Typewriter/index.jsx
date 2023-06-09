import React, { useEffect, useRef } from 'react';
import './styles.css';

function Typewriter() {
  const textRef = useRef(null);

  useEffect(() => {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period, textRef);
      }
    }
    // INJECT CSS
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);

    return () => {
      clearInterval(textRef.current);
    };
  }, []);

  return (
    <div className="Presentation">
      <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
      <h1 className='txt-h1'>
        💬
        <span
          className="txt-rotate"
          data-period="2000"
          data-rotate='[ " Pedro Regenes.", " Dev Front End.", " Paulista.", " Amante de Café." ]'
          ref={textRef}
        ></span>
      </h1>
    </div>
  );
}

var TxtRotate = function(el, toRotate, period, textRef) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.textRef = textRef;
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  this.textRef.current = setTimeout(function() {
    that.tick();
  }, delta);
};

export default Typewriter;