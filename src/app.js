"use strict";
import {inject, LogManager} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

/**
 * The top-level application entry point.
 */
@inject(Router)
export class App {

  /**
   * The application name.
   * @type {string}
   */
  name = 'Aurelia App';

  /**
   * Current timestamp
   * @type {Date}
   */
  now = new Date();

  /**
   * Simple chart config.
   * @type {object}
   */
  chartConfig = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  };

  /**
   * Chart (currently highcharts) data feed url.
   * @type {object}
   */
  chartConfigCsv = {
    url: "http://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?",
    config: {
      title: {
        text: 'Daily visits at www.highcharts.com'
      },

      subtitle: {
        text: 'Source: Google Analytics'
      },

      xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
          align: 'left',
          x: 3,
          y: -3
        }
      },

      yAxis: [{ // left y axis
        title: {
          text: null
        },
        labels: {
          align: 'left',
          x: 3,
          y: 16,
          format: '{value:.,0f}'
        },
        showFirstLabel: false
      }, { // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
          text: null
        },
        labels: {
          align: 'right',
          x: -3,
          y: 16,
          format: '{value:.,0f}'
        },
        showFirstLabel: false
      }],

      legend: {
        align: 'left',
        verticalAlign: 'top',
        y: 20,
        floating: true,
        borderWidth: 0
      },

      tooltip: {
        shared: true,
        crosshairs: true
      },

      plotOptions: {
        series: {
          cursor: 'pointer',
          point: {
            events: {
              click: function (e) {
                hs.htmlExpand(null, {
                  pageOrigin: {
                    x: e.pageX || e.clientX,
                    y: e.pageY || e.clientY
                  },
                  headingText: this.series.name,
                  maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                  this.y + ' visits',
                  width: 200
                });
              }
            }
          },
          marker: {
            lineWidth: 1
          }
        }
      },

      series: [{
        name: 'All visits',
        lineWidth: 4,
        marker: {
          radius: 4
        }
      }, {
        name: 'New visitors'
      }]
    }
  };


  /**
   * Creates a new instance of this object.
   * @param router the root router.
   */
  constructor(router) {
    var log = this.log = LogManager.getLogger('app');
    log.debug('Configuring application.');
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        {route: ['', 'welcome'], moduleId: './welcome/welcome', nav: true, title: 'Welcome'}
      ]);
    });
  }
}
