---
id: advanced
title: Advanced
---

This section show some of the more advanced hidden features in Led Departure Board

## Global

### Auto Accept Cookies

If you are trying to show the website on a custom signage board, or embedded frame, then you may find the cookies banner keeps popping up. To get rid of this you can add the extra **acceptCookies** parameter to the url.

E.g
[www.leddepartureboard.com/EUS?acceptCookies=true](https://www.leddepartureboard.com/EUS?acceptCookies=true)

Or if you already are using a parameter then use **&** instead
[www.leddepartureboard.com/EUS?platform=1&acceptCookies=true](https://www.leddepartureboard.com/EUS?platform=1&acceptCookies=true)


## Mainboard

### Filter to stations a service will pass through

Sometimes you may only want to see departures that are going to a paticular place. E.g only want to see departures from Edinburgh that go through Birmingham New Steet.

**To do this you can add a to filter on the url**. E.g [www.leddepartureboard.com/EDB/to/BHM](https://www.leddepartureboard.com/EDB/to/BHM)

This can also be used with all the different boards and urls. Here's a list of possible combinations:

- **/EDB/to/BHM** - Normal to station filtering
- **/EDB/to/BHM/12** - Display count on the end
- **/singleboard/EDB/to/BHM/12** - Singleboard with to station filtering
- **/arrivals/EDB/to/BHM** - To Station filtering on arrivals
- **/singleboard/arrivals/EDB/to/BHM** - Singleboard To Station filtering on arrivals


