# Test plan for Action camera

## Objective:

The objective of this test plan is to ensure the functionality, performance and reliability of an action camera

## Camera's functions: The camera has a power button, shutter button and mode switch button, which toggles between video and still image capture.

## 1. Power Button Functionality

- **Type**: Positive Functional Test
- **Test Description**: Verify that the power button turns the camera on and off correctly
- **Steps to reproduce**:
  1. Press the power button once
  2. Check if the camera powers on
  3. Press the power button again
  4. Check if the camera powers off
- **Expected Result**: The camera should turn on with the first press and off with the second press

---

## 2. Shutter Button (Photo Capture)

- **Type**: Positive Functional Test
- **Test Description**: Verify that the shutter button correctly takes photos when pressed
- **Steps to reproduce**:
  1. Power on the camera and set it to photo mode
  2. Press the shutter button
  3. Check if the photo is saved correctly in the camera’s memory
- **Expected Result**: The camera should take a photo and save it in the appropriate folder

---

## 3. Mode Switch Button (Toggle Modes)

- **Type**: Positive Functional Test
- **Test Description**: Verify that the mode switch button toggles between photo and video modes
- **Steps to reproduce**:
  1. Power on the camera and check which mode is currently active (photo or video)
  2. Press the mode switch button to toggle to the opposite mode
  3. Confirm that the mode changes correctly
- **Expected Result**: The mode should toggle between photo and video mode without issue

---

## 4. Shutter Button (Video Capture)

- **Type**: Positive Functional Test
- **Test Description**: Verify that the shutter button correctly starts and stops video recording
- **Steps to reproduce**:
  1. Power on the camera and set it to video mode
  2. Press the shutter button to start recording
  3. After some time, press the shutter button again to stop recording
  4. Check if the video file is saved correctly in the camera’s memory
- **Expected Result**: The camera should start and stop video recording with the shutter button and save the video file

---

## 5. Water resistance (up to 100 meters)

- **Type**: Positive functional test
- **Test description**: Verify that camera works correctly at a depth of 100 meters
- **Steps to reproduce**:
  1.  Place the camera in a water
  2.  Make sure that the depth is 100 meters
  3.  Power on the camera and check all functions
- **Expected result**: The camera should turn on an all functions should work properly (e.g.taling pictures, video recording)

---

## 6. Water resistance (above to 100 meters)

- **Type**: Negative functional test
- **Test description**: Verify that camera does not turn on because of the water resistance limits
- **Steps to reproduce**:
  1.  Place the camera in a water
  2.  Make sure that the depth is 101 meters
  3.  Power on the camera
- **Expected result**: The camera should fail to function, showing no power or signs of malfunction due to water damage, but it should not explode or overheat

---

## 7. Vertical fall resistance (up to 15 meters)

- **Type**: Positive functional test
- **Test description**: Verify that the camera survives a 15-meter vertical drop
- **Steps to reproduce**:
  1. Drop the camera from a height of 15 meters onto a hard surface
  2. Check if the camera survives and there is no visibal damage
  3. Power on the camera and test its functions
- **Expected result**: The camera should turn on an all functions should work properly (e.g.taling pictures, video recording)

---

## 8. Vertical fall resistance (more than 15 meters)

- **Type**: Negative functional test
- **Test description**: Verify that the camera doesnt work
- **Steps to reproduce**:

  1. Drop the camera from a height of 16 meters onto a hard surface
  2. Check if the camera and no visibal damage
  3. Power on the camera

- **Expected result**: Camera might not power on or some fuctions won't perform, but it should not explode or overheat

---

## 9. Battery Life (10 Hours Standby)

- **Type**: Positive functional test
- **Test description**: Verify that the camera can stay on standby for 10 hours
- **Steps to reproduce**:

  1. Fully charge the camera battery
  2. Power on the camera and leave it on standby mode (without any active use) for 9-10 hours
  3. Check if the camera still has power after 9-10 hours

- **Expected result**: The camera should have power and be in standby mode at least for 10 hours

---

## 10. Battery life (4 Hours filming)

- **Type**: Positive functional test
- **Test description**: Verify that the camera can record videos for 4 hours
- **Steps to reproduce**:

  1. Fully charge the camera battery
  2. Start recording video
  3. Check if the camera still has power after 3-4 hours

- **Expected result**: The camera should have power and be in recording mode at least for 4 hours

---

## 11. Camera memory capacity

- **Type**: Positive Functional Test
- **Test Description**: Verify that the camera can handle memory capacity
- **Steps to reproduce**:
  1. Fill the camera memory with photos and videos until it is full
  2. Start recording a new video after the memory is full
- **Expected Result**: The camera should overwrite the oldest photos/videos or should shpw an error

## 12. Overheating protection

- **Type**: Negative Functional Test
- **Test Description**: Verify that the camera shuts down or reduces functionality if it overheats
- **Steps to reproduce**:
  1. Turn on the camera and leave it recording video for an extended period while being on a charge
  2. Monitor the temperature of the camera during usage
  3. Check if the camera shuts off or activates any cooling mechanisms when it reaches a high temperature
- **Expected Result**: The camera should either shut off or reduce its functionality when it overheats to prevent damage

---

## 12. Firmware Update

- **Type**: Positive Non-Functional Test
- **Test Description**: Verify that the camera can successfully update its firmware
- **Steps to reproduce**:
  1. Download the latest firmware update
  2. Follow the instructions to install the update
  3. Verify that the firmware is updated without any errors
- **Expected Result**: The firmware should update successfully and the camera should function properly with the new firmware.

---

## 13. Camera reset functionality

- **Type**: Negative Functional Test
- **Test Description**: Verify that the camera can be reset to factory settings
- **Steps to reproduce**:
  1. Power on the camera and access the settings menu
  2. Select the option to reset the camera to factory settings
  3. Confirm the reset and check if the camera returns to its default state
- **Expected Result**: The camera should return to its default factory settings, with no saved data or custom settings

---

## 14. Compliance with physical specifications (weight, form, size, color)

- **Type**: Positive Non-Functional Test
- **Test Description**: Ensure that the camera complies with its specified physical dimensions and weight
- **Steps to reproduce**:
  1. Measure the camera’s weight, height, width, and color
  2. Compare the measured dimensions with the specifications provided in the user manual
  3. Check if the camera’s weight is as specified in the documentation
- **Expected Result**: The camera’s weight, size, color and shape should match the specifications provided by the manufacturer

## 15. Usability (handling and Attachment)

- **Type**: Positive Non-Functional Test
- **Test Description**: Verify that the camera is easy to handle and attach to something
- **Steps to reproduce**:
  1. Hold the camera in a hand to assess its ergonomics
  2. Attach the camera to different compatible mounts (e.g., helmet, tripod)
  3. Check if the camera fits securely and comfortably in the hand or mount
- **Expected Result**: The camera should be easy to hold and comfortably attach to various mounts without issues
