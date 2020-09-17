# Lantum frontend take home task

## Usage

- Made using `create-react-app`
- Clone the repo, cd into the directory and run, `npm install`
- To run the application `npm start` to run the tests `npm run tests`

## If I had more time

- There are a few things I would like to tweak. For example, there is a duplicate line in the logic in order for both the tests and the application to run, I would like to remove this, or at least implement it slightly better. I could go back to my original implementation and have `moment(item.startDatetime).format()` repeated, and then I could remove the extra variable, and just include it in the above function. It is likely this could also be solved by declaring `shiftDate` at the top of the `RenderShifts` function. Or there is probably a way to do this in `getRequest.js` at the point where the data is received.
- To add some additional CSS to make the page a little more aesthetically pleasing. Nothing too overt as functionality is more important than looks.
- A very small thing would be to move the 'user1' and other objects I used in the testing out to a separate folder. I think it would look much neater and be clearer.
- I also noticed that the `loading` promise, is resolved when the data is received, so that probably doesn't need to be a promise, and can just be set above the `fetch`.
- As `RenderShifts` is exposed the entire time, and `items` is initialised with an empty array, there is a moment where the array sent to `RenderShifts` is empty as the data hasn't been received yet. This then errors the `map` function on line 30. It's currently being avoided as the `if` statement checks the length of the array, and this additional time is enough for the data to be returned. But there is likely a better solution that doesn't rely on defensive programming.
