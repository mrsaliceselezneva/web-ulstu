// material-ui

// project imports
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

// ==============================|| DEFAULT DASHBOARD ||============================== //

import {useEffect} from 'react';
import * as am5percent from "@amcharts/amcharts5/percent";

const Slices = ({ chartRootName, data }) => {
    useEffect(() => {
        let root = am5.Root.new(chartRootName);
        if (root._logo) {
            root._logo.dispose();
        }

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                radius: am5.percent(100),
                innerRadius: am5.percent(80),
                layout: root.verticalLayout
            })
        );


// Define data
        let data = [{
            competence: "Обычный",
            count: 350
        }, {
            competence: "Подтверждён документально",
            count: 301
        }, {
            competence: "Подтверждён специалистом",
            count: 201
        }, {
            competence: "Подтверждён\nнаучными источниками",
            count: 165
        }];

// Create series
        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "count",
                categoryField: "competence"
            })
        );
        series.labels.template.set("forceHidden", true);
        series.ticks.template.set("forceHidden", true);
        series.slices.template.states.create("active", {
            shiftRadius: 0,
            stroke: am5.color(0x000000),
            strokeWidth: 3
        });
        series.data.setAll(data);

// Add legend
        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root.gridLayout
        }));

        legend.data.setAll(series.dataItems);

        return () => {
            root.dispose();
        };

    }, [data]);

    return <div id={chartRootName} style={{ width: '100%', minHeight: '332px'}}></div>;
};

export default Slices;