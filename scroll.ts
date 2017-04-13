 private marketsUp: boolean;
 private filterUp: boolean;
 private findHeight;
  
 
 findHide() { 
    var stickyHeaderTop: any = document.getElementById('live');
    stickyHeaderTop = stickyHeaderTop.offsetTop;
    var main: any = document.getElementById('live');
    var lastScroll = 0;
    var down = false;
    var scrollingTop;

    document.getElementById('live').addEventListener('scroll', (e) => {

      let el: any = main;

      if (el.contains(e.target)) {
        var scroll = main.scrollTop;
        down = scroll > lastScroll;
        lastScroll = scroll;

        if (main.scrollTop > 0 && down) { //when scrolling down
          this.marketsUp = true; hide the element
          if (main.scrollTop > 95 && down) { //hide after 95px from the top
            this.filterUp = true; // hide the element
          }
        } else {  //when scrolling up
          this.filterUp = false; // show the element
          if (scrollingTop) { // if continue scrolling remove the timeout
            clearTimeout(scrollingTop);
          }
          scrollingTop = setTimeout(() => { //timeout for element to be present for some time
            this.filterUp = true; //hide the element
          }, 6000);

          this.marketsUp = true; //hide the element

          if (main.scrollTop == 0) {  // when reaches top when scrolling up
            clearTimeout(scrollingTop);
            this.marketsUp = false; //show the element
            this.filterUp = false;  //show the element
            // scroll = main.scrollTop; scrolling auto to top  
          }
        }
      }
    }, true);
  }

  ngAfterViewInit() {
    var interval = setInterval(() => {
      var isPresentElement = document.getElementById('live');
      if (isPresentElement) {
        this.findHide(); // calling the function
        clearInterval(interval);
      }
    }, 500);
  }
