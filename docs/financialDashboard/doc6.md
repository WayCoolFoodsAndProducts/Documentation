---
id: doc6
title:  Dashboard.js
sidebar_label: Dashboard.js
---

## Bar Graph
Request Type: GET
```
{BASE_URL}/api/v1/admin/fc/getHorizontalBarGraphData
```
**QueryParams:**
Keys | Type | Optional
------------ | ------------- | -------------
location | String | Yes
customerGroup | String | Yes
customerSubgroup | String | Yes


**Response in JSON:** 
```
{
    "message": "Data for horizontal bar graph",
    "data": {
        "graphData": [
            [
                "Days",
                "Balance Verification Not Done",
                "On-going Collection But Not Submitted To FC",
                "Amount In Dispute More Than Seven Days Old",
                "Amount In Dispute Less Than Seven Days Old",
                "Beat Plan Collection Not Done"
            ],
            [
                "1-7",
                0,
                0,
                0,
                0,
                0
            ],
            [
                "8-15",
                0,
                0,
                0,
                0,
                0
            ],
            [
                "16-21",
                0,
                0,
                0,
                0,
                0
            ],
            [
                "22-30",
                0,
                0,
                0,
                0,
                0
            ],
            [
                "31-60",
                0,
                5540,
                0,
                0,
                13280.1
            ],
            [
                ">60",
                0,
                464,
                0,
                0,
                35516
            ]
        ],
        "data": {
            "totalOverDue": "541085270.33",
            "totalOutStanding": "550802001.02"
        }
    }
}
```

## Pie Chart
Request Type: GET

```
{BASE_URL}/api/v1/admin/fc/pieChartDataByLocation
```
**QueryParams :** NA

**Response in JSON:** 

```
{
    "message": "Pie chart data by location",
    "data": [
        {
            "location": "chennai",
            "outstandingAmount": "326803822.48"
        },
        {
            "location": "gummidipoondi",
            "outstandingAmount": "6222420.33"
        },
        {
            "location": "coimbatore",
            "outstandingAmount": "42482662.21"
        },
        {
            "location": "hyderabad",
            "outstandingAmount": "51252306.95"
        },
        {
            "location": "bangalore",
            "outstandingAmount": "101341397.99"
        },
        {
            "location": "padappai",
            "outstandingAmount": "22699391.06"
        }
    ]
}
```

## Scatter Plot Graph
Request Type: GET

```
{BASE_URL}/api/v1/admin/fc/getScatterGraphData
```
**QueryParams:**
Keys | Type | Optional
------------ | ------------- | -------------
location | String | Yes
customerGroup | String | Yes
customerSubgroup | String | Yes


**Response in JSON:** 

```
{
    "message": "Scatter plot data",
    "data": {
        "maxOverDue": "42858371.87",
        "avgOverDue": "25512.06",
        "graphData": [
            {
                "customer": "7 STAR DHABA FAMILY RESTURANT",
                "amount": 19168.12,
                "days": 70
            },
            {
                "customer": "9 STAR HOTEL",
                "amount": 1345,
                "days": 4
            },
            {
                "customer": "9 STAR HOTEL",
                "amount": 154,
                "days": 19
            },
            {
                "customer": "9 STAR HOTEL",
                "amount": 500,
                "days": 26
            },
            {
                "customer": "9 STAR HOTEL",
                "amount": 632,
                "days": 46
            },
        ]
    }
}
```

## Conversion Chart Graph
Request Type: GET
```
{BASE_URL}/api/v1/admin/fc/conversionChart
```
**QueryParams:** NA

**Response in JSON:** 

```
{
    "message": "Conversion chart data",
    "data": {
        "totalCommittmentAmount": 762,
        "totalCollectionAmount": 7312.8,
        "dataArray": [
            {
                "date": "2020-03-18T00:00:00.000Z",
                "CommitmentAmount": 166,
                "CollectionAmount": 149
            },
            {
                "date": "2020-03-19T10:25:32.556Z",
                "CommitmentAmount": 137,
                "CollectionAmount": 235
            }
        ]
    }
}
```

## Outstanding Table
Request Type: GET

```
{BASE_URL}api/v1/admin/fc/getCustomerOutstanding
```
**QueryParams:**
Keys | Type | Optional
------------ | ------------- | -------------
limit | Number | No
page | Number | No


**Response in JSON:** 

```
{
    "message": "Customer outstanding list",
    "data": {
        "totalPages": 1061,
        "tableData": [
            {
                "customerCode": 1919,
                "customerName": "MAX HYPERMARKET INDIA PVT LTD(Forum Mal)(CHE-1919)",
                "outstanding": 3960030.31,
                "assignedTo": "",
                "location": "chennai"
            },
            {
                "customerCode": 1963,
                "customerName": "SUNRISE FOODS AND PRODUCTS",
                "outstanding": 3756515,
                "assignedTo": "",
                "location": "chennai"
            }
        ]
    }
}
```

## Data for Filters
Request Type: GET

```
{BASE_URL}api/v1/admin/fc/getPrefilledData
```
**QueryParams:** NA

**Response in JSON:** 
```
{
    "message": "Search query result list",
    "data": {
        "customerGroup": [
            "Sundry Debtors",
            "Current Assets"
        ],
        "location": [
            "gummidipoondi",
            "hyderabad"
        ],
        "customerSubgroup": [
            "Staples Debtors",
            "Pepsi Debtors",
            "KELLOGGS",
            "Sundry Debtors"
        ]
    }
}
```


