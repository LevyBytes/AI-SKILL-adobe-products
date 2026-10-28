# distribute

> **distribute**( PageItem **alignDistributeItems**, DistributeOptions **distributeOption**, AlignDistributeBounds **alignDistributeBounds**, Boolean **useDistributeMeasurement**, Measurement Unit (Number or String)=any **absoluteDistributeMeasurement**, PageItem **reference** )
>
> Spreads page items apart.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | alignDistributeItems | Page items being aligned or distributed. |
| DistributeOptions | distributeOption | Distribution mode to use. |
| AlignDistributeBounds | alignDistributeBounds | Boundary area used for aligning or distributing page items. (Optional) |
| Boolean | useDistributeMeasurement | When true, spaces page items apart; with this enabled, the bounds setting is disregarded. (Optional) |
| Measurement Unit (Number or String)=any | absoluteDistributeMeasurement | Distance value applied while distributing page items. Needed when 'key object' is the chosen 'align distribute bounds' value. (Optional) |
| PageItem | reference | Reference or key object used as the relative target for alignment or distribution. Needed when 'key object' is the chosen 'align distribute bounds' value; supply this page item as the reference. (Optional) |
