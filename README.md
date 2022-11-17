# Project Overview


## Project Description

Crosschain Bridge Stats lets users obtain information on crypto asset flows between different blockchains. Users can retreive the information by selecting the Source and Destintion chains, the Asset and the time segment. Once the parameters have been set, the app returns three blocks of stats consisting of cumulative number of transfers, volume, a time series graph of transfers and a time series graph of volume for the specified time segment.

## Project Links

- [github repo](https://github.com/guillermoaviles/crosschain-bridging-stats)
- [deployment](https://crosschain-bridging-stats.vercel.app/)

## Wireframes & React Component Hierarchy

- [wireframe](https://github.com/guillermoaviles/crosschain-bridging-stats/blob/MVP/design/Crosschain%20Bridge%20Stats%20Wireframe%201.png)
- [wireframe](https://github.com/guillermoaviles/crosschain-bridging-stats/blob/MVP/design/Crosschain%20Bridge%20Stats%20Wireframe%202.png)
- [react architecture](https://github.com/guillermoaviles/crosschain-bridging-stats/blob/MVP/design/React%20Component%20Hierarchy%20Diagram.png)


### MVP/PostMVP

#### MVP
- Using external [API](https://docs.axelarscan.io/) to get bridge route data for a given token.
- Rendering data obtained fromm API on page in text and chart form. 
- Users are able to interact with the page by selecting the source and destination chains, asset and time range they wish to obtain information on.

#### PostMVP

- Use multiple external APIs to aggregate date from a wider set of bridges and assets.
- Provide additional resources, links and charts to give users a deeper insight into their research goals.
- Extend list of parameters in order to provide more tailored data; such as getting bridge interaction history by wallet address, getting general data on a single bridge end, etc.

## Components

| Component | Description | 
| --- | :---: |  
| App | This stores the initial parameters set by the user, passes it to other components and includes React Router| 
| Header | This renders the header, includes the nav | 
| Home | Contains the buttons and input logic and sets the state for the user inputted parameters. | 
| Stats | Contains the MainStats, TimeSeries and CumulativeVolume components. | 
| MainStats | Fetches API data for cumulative number of transactions and volume based on the parameters set by the user and renders the reults. |
| TimeSeries | Fetches time series API data for cumulative number of transactions based on the parameters set by the user and renders the reults. |
| MainStats | Fetches time series API data for cumulative volume based on the parameters set by the user and renders the reults. |

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the project.  Your estimates can then be used to evaluate project possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, Bootstrap, Tailwind CSS, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
