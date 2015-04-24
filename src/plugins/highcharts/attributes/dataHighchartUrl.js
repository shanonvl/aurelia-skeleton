import {LogManager, inject, customAttribute} from 'aurelia-framework';
import $ from 'components/jquery';
import Highcharts from 'highslide-software/highcharts.com';
import * as hcExporting from 'highslide-software/highcharts.com/js/modules/exporting.src';
import * as hcData from 'highslide-software/highcharts.com/js/modules/data.src';

let log = LogManager.getLogger('HighchartsUrlAttribute');

@customAttribute('data-chart')
@inject(Element)
export class HighchartsAttribute {

  chartConfig = {};

  constructor(element) {
    this.element = element;
    log.debug("Creating instance with element: ", this.element);
  }

  /**
   * Fired when the template markup is attached to the DOM.
   */
  attached() {
    "use strict";
    if (this.chartConfig.url) {
      this.renderCsvChart(this.element);
    }
    else {
      this.renderChart(this.element);
    }
  }

  /**
   * Fired when the attribute value is changed.
   * @param newValue new value.
   */
  valueChanged(newValue) {
    this.chartConfig = newValue;
  }

  /**
   * Renders
   * @param el
   */
  renderChart(el) {
    $(el).highcharts(this.chartConfig);
  }

  renderCsvChart(el) {
    "use strict";
    let $el = $(el),
    chartConfig = this.chartConfig;
    $.getJSON(chartConfig.url, function (csv) {
      $el.highcharts(
        // ensure the csv data is mapped into the config correctly.
        $.extend(chartConfig.config, {data: {csv: csv}})
      );
    });
  }
}
