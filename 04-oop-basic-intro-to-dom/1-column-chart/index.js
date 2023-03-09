export default class ColumnChart {
    constructor({ data, label, value, link, formatHeading}) {
        this.data = data;
        this.label = label;
        this.value = value;
        this.link = link;
        this.formatHeading = formatHeading;
        this.chartHeight = 50
        this.update();
        this.getColumnProps(this.data);
    }

    update() {
        const el = document.createElement('div');
        const infoChart = this.getColumnProps(this.data);
        el.innerHTML = `
        <div class="column-chart" style="--chart-height: ${this.chartHeight}}">
            <div class="column-chart__title">
                Total ${this.label}
                <a href="${this.link}" class="column-chart__link">View all</a>
            </div>
            <div class="column-chart__container">
                <div data-element="header" class="column-chart__header">${this.value}</div>
                <div data-element="body" class="column-chart__chart">
                <div style="--value: 50" data-tooltip="100%"></div>
                <div style="--value: 45" data-tooltip="90%"></div>
                <div style="--value: 40" data-tooltip="80%"></div>
                <div style="--value: 17" data-tooltip="35%"></div>
                <div style="--value: 45" data-tooltip="90%"></div>
                <div style="--value: 12" data-tooltip="25%"></div>
                <div style="--value: 22" data-tooltip="45%"></div>
                <div style="--value: 32" data-tooltip="65%"></div>
                <div style="--value: 35" data-tooltip="70%"></div>
                <div style="--value: 12" data-tooltip="25%"></div>
                <div style="--value: 7" data-tooltip="15%"></div>
                <div style="--value: 2" data-tooltip="5%"></div>
                <div style="--value: 5" data-tooltip="10%"></div>
                <div style="--value: 12" data-tooltip="25%"></div>
                <div style="--value: 25" data-tooltip="50%"></div>
                </div>
            </div>
        </div>
        `;
        this.element = el.firstElementChild;
    }

    getColumnProps(data) {
        const maxValue = Math.max(...data);
        const scale = 50 / maxValue;

        return data.map(item => {
            return {
                percent: (item / maxValue * 100).toFixed(0) + '%',
                value: String(Math.floor(item * scale))
            };
        });
    }
}
