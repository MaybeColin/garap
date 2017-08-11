# Google Analytics Reporting API Parser
The Google Analytics Reporting API sends back a response that is extremely hard to use. This exposes some simple parsing functions to turn the reports into json & a 2d array (csv) format.

There are two functions `reportToJson` and `reportToArray` these both accept the exact response from the Analytics Reporting API and will return the parse object.
