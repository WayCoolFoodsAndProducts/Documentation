---
id: doc8
title:  Disputes
sidebar_label: Disputes
---

## Get Collection Dispute

Inside `Disputes` folder in `/src/Components/Screens/Disputes/`, there are five kind of Disputes respresented by five **js** files, **Payment,** **Collection,** **Invoice,** **Debit,** & **Credit**.

Each of these contains a method `getCollectionDispute()`, where the API request is done:

```
getDisputeCollection = async () => {
    const { disputeType, tableDataPageNumber, limit } = this.state;
    let requestMethods = {
      url: "api/v1/admin/dispute/disputeType",
      queryParams: [
        {
          limit: limit
        },
        {
          page: tableDataPageNumber
        },
        {
          disputeType: disputeType
        }
      ]
    };
    .....
```

Request Type: GET
```
{BASE_URL}/api/v1/admin/dispute/disputeType
```
**QueryParams:**
Keys | Type | Optional
------------ | ------------- | -------------
limit | Number | No
page | Number | No
disputeType | String | No


**Response in JSON:** 
```
{
    "message": "Dispute list",
    "data": {
        "getTotalSum": [
            {
                "status": "closed",
                "count": 1
            },
            {
                "status": "new",
                "count": 0
            }
        ],
        "totalTablePages": 1,
        "dataArray": [
            {
                "disputeId": "5e734e79aceca21ffa60ea47",
                "customerCode": "927",
                "collectionId": "5e734e233eed9d8cd07ff08d",
                "invoiceId": "",
                "disputeAmount": 47,
                "date": "2020-03-19T10:50:33.776Z",
                "location": "bangalore",
                "status": "closed",
                "participants": [
                    {
                        "_id": "5e734e79aceca21ffa60ea48",
                        "employeeName": "Khurshed Alam Md",
                        "empCode": "WFP/420/19"
                    }
                ]
            }
        ]
    }
}
```

