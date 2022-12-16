// material-ui

// project imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

// ==============================|| DEFAULT DASHBOARD ||============================== //

import { useLayoutEffect } from 'react';
import {subMonths} from "date-fns";

const Chart = ({ chartRootName, data }) => {
    useLayoutEffect(() => {
        let root = am5.Root.new(chartRootName);
        if (root._logo) {
            root._logo.dispose();
        }

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                wheelY: "zoomX",
                layout: root.verticalLayout
            })
        );

        let xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                maxDeviation: 0.1,
                groupData: true,
                min: subMonths(new Date(), 1).getTime(),
                max: new Date().getTime(),
                baseInterval: {
                    timeUnit: "day",
                    count: 1
                },
                renderer: am5xy.AxisRendererX.new(root, {
                    minGridDistance: 60
                }),
                tooltip: am5.Tooltip.new(root, {})
            })
        );

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0.1,
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        xAxis.data.setAll(data);

        // Create series
        function createSeries(name, field) {
            let series = chart.series.push(
                am5xy.LineSeries.new(root, {
                    minBulletDistance: 10,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    name: name,
                    valueYField: field,
                    valueXField: 'date',
                    tooltip: am5.Tooltip.new(root, {
                        pointerOrientation: 'horizontal',
                        labelText: '{valueX.formatDate()}: {valueY}'
                    })
                })
            );

            series.strokes.template.setAll({
                strokeWidth: 3,
                templateField: 'strokeSettings'
            });

            series.bullets.push(function () {
                return am5.Bullet.new(root, {
                    locationY: 0,
                    sprite: am5.Circle.new(root, {
                        radius: 6,
                        stroke: root.interfaceColors.get('background'),
                        strokeWidth: 0,
                        fill: series.get('fill')
                    })
                });
            });

            series.data.setAll(data);
        }
        if (data.length) {
            createSeries("Пробретённые компеценции", "value");
        }

        // Add legend
        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        let cursor = chart.set(
            'cursor',
            am5xy.XYCursor.new(root, {
                xAxis: xAxis
            })
        );
        cursor.lineY.set('visible', false);

        let legend = chart.children.push(
            am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            })
        );
        legend.itemContainers.template.states.create('hover', {});

        legend.itemContainers.template.events.on('pointerover', function (e) {
            e.target.dataItem.dataContext.hover();
        });
        legend.itemContainers.template.events.on('pointerout', function (e) {
            e.target.dataItem.dataContext.unhover();
        });
        legend.data.setAll(chart.series.values);

        return () => {
            root.dispose();
        };
    }, [data]);

    return <div id={chartRootName} style={{ width: '100%', height: '260px' }}></div>;
};

export default Chart;