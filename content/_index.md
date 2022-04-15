---
title: Home
content_blocks:
  - _bookshop_name: sections/hero
    logo_image: /uploads/hugo-logo.svg
    post_logo: conf
    date:
      _bookshop_name: simple/event-date
      date: June 24th + 25th 2022 pST
    button:
      _bookshop_name: generic/button
      label: Register free today!
      view_label_icon: true
      border_color: border-blue
    content: The free, online conference for everything Hugo
  - _bookshop_name: sections/video-section
    video:
      _bookshop_name: simple/video
      url: https://www.youtube.com/embed/YE7VzlLtp-4
    button:
      _bookshop_name: generic/button
      label: Submit your talk
      view_label_icon: false
      border_color: border-white
    notice_message: <p>Want to speak? Submit your proposal by <strong>June 1st. </strong></p>
  - _bookshop_name: sections/hexagon-group
    hexagons:
      - _bookshop_name: simple/hexagon-block
        hexagon_color: pink
        title: A conference for all Hugoers
        content: >-
          <p>HugoConf organizers are dedicated to providing a safe, inclusive
          and harassment free environment for all attendees. Please review our
          <a href="#">code of conduct</a> help build the community by being
          supportive and constructive.</p><p>&nbsp;</p><p>If you have any
          questions or suggestions, reach out to <a
          href="mailto:team@hugoconf.com">team@hugoconf.com</a>.</p>
      - _bookshop_name: simple/hexagon-block
        hexagon_color: green
        title: Help us organize
        content: >-
          <p>We're looking for members of the community to help plan and run the
          conference on the day. If you're interested in participating in any
          capacity, get in touch! We'd love your help.</p>
      - _bookshop_name: simple/hexagon-block
        hexagon_color: yellow
        title: FAQs
        content: >-
          <p><strong>Where is HugoConf held?</strong><br />Right here on this
          website! On the day, we'll stream the sessions directly on this
          page.</p><p>&nbsp;</p><p><strong>I can't attend, will the videos be
          available later?</strong><br />Yes, all sessions will be recorded and
          publicly available on YouTube.</p>
  - _bookshop_name: simple/modal
    heading: hello
    form:
      _bookshop_name: simple/form
      _instancevalue: UUID
      inputs:
        - _bookshop_name: generic/form/text-input
          _name: UUID
          label: Full name
          required: true
        - _bookshop_name: generic/form/email-input
          _name: 46529f85-ea18-450b-be45-b2d1b7b7ded7
          label: Email address
          required: true
        - _bookshop_name: generic/form/checkbox-group
          title: 'Are you interested in:'
          checkboxes:
            - _bookshop_name: generic/form/checkbox-input
              _name: 48b322c0-c9b7-43a1-a5ba-9536700d9385
              label: Speaking
              checked: false
              required: false
            - _bookshop_name: generic/form/checkbox-input
              _name: 08975d84-22f7-43ca-9f85-343755a63601
              label: Teaching a workshop
              checked: false
              required: false
            - _bookshop_name: generic/form/checkbox-input
              _name: 0ea127af-745a-4381-8fe6-488bb84cf9cf
              label: Helping organize the conference
              checked: false
              required: false
      formCheckBox:
        _bookshop_name: generic/form/checkbox-input
        _name: 7080f9ea-1204-4152-a598-d5228ae1d083
        label: I agree to the code of conduct
        checked: false
        required: true
      submit_button:
        _bookshop_name: generic/button
        label: Register
        view_label_icon: true
        border_color: border-pink
---

