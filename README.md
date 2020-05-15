# Dentist-Profile
Dentist-Profile is a scheduling app that enables dentists to easily notify their business partners of their availability.

The schedule layout enables the dentist to update the schedules of the dentist, assistant, and hygenist by clicking on a button and filling out a short form. The calendar then updates by shading the time slots marked available with blue. It also informs the scheduler of the start and end time of the available block.

The four main requirements of this app were as follows:
1. Create a schedule layout using react and JSX. Style using whatever means desired.
2. Create a button that onClick opens up a modal
3. Within the modal, create a form with the following three fields:
  * Select Column (as a dropdown)
  * Start time
  * End time
- When the modal is saved, close the modal and store the information however desired (I chose to store it in state using Redux).
4. Using the saved information, display the newly created time block(s) on the schedule. The
blocks should
- Appear only in the column that they were selected for.
- Start at the selected start time and continue until the end time.


## Additional Features Include:
* Toggle arrows to move calendar to the previous day or next day. Useful if needing to navigate update the days near the current date.
* Calendar data picker which allows for quick navigation if needing to skip over larger time spans (i.e several days, weeks, or months).
* Validation logic. Ensures that users can only select an end time that is after the start time. It also ensures that the end time is at most midnight of the start date (i.e ensures same day scheduling). This restriction can further be developed if one knows the working hours of a dental office.
 

## Technologies Used:
* React - Uses React Hooks for all components
* Redux - For state management
* Javascript - For date manipulation and business logic
* Material-UI - Provided a handy UI components such as Modal and Tabs


## Potential Improvements
This app had a deadline of 5 days and as such has room for improvement. Some ideas that come to mind are:
1. Ability to drag over time slots and create shading on the fly (such as in Google calendar, Yahoo calendar, Outlook, etc).
2. Ability to display calendar by week and by month. I created the tabs component that would have the onClick handlers for this feature, but didn't have time to implement the actual functionality. Displaying by week or month would have to provided different views and need some consideration on what information to display because displaying all 3 columns (Dentist, Assistant, and Hygenist) would be too cluttered.
3. Automated tests to test if the correct dates are being stored and if the calendar is updating properly. I did a lot of manual inspection and checking for edges cases, but having automated tests is obviously preferred.
4. Persistent storage. Since state was stored in a document-like fashion (using Javascript objects), the transition to storing the data to a NoSQL database would be seamless.
5. Cross-compatibility - This app uses the <input type="datetime-local"> HTML feature which only Chrome/Opera and Edge have usuable implementations of on desktop. Another thing I noticed was that my version of Safari (v10.1.2) does not support the spread operator on objects. Thus, I would need to write longer code to enable my app to render on Safari and perhaps other browsers that don't support more advanced Javascript features.
6. Mobile-friendly? - I believe having a separate mobile implementation of this app would be better than making this web application a responsive website. Thus, I intentionally made it so that the CSS styling would encourage users to use the app with a full desktop screen. Google and Yahoo calendars also take this approach of encouraging users to use the full desktop screen as their calendars only shrink so much before hitting min width styling.