---
title: Code of Conduct
content_blocks:
  - _bookshop_name: sections/hero
    logo_image: /uploads/hugo-logo.svg
    post_logo: conf
    date:
      _bookshop_name: simple/event-date
      date: July 8th + 9th 2022 PST
    content: The free, online conference for everything Hugo
    button:
      _bookshop_name: generic/button
      label: Register free today!
      id:
      view_label_icon: true
      border_color: border-blue
      add_modal: true
      open_modal: false
      modal:
        _bookshop_name: simple/modal
        heading: Register today!
        modal_content:
          - _bookshop_name: simple/form
            _instancevalue: UUID
            inputs:
              - _bookshop_name: generic/form/email-input
                _name: a1bb2a0c-6368-469e-91c8-391ae5a6958f
                label: Email address
                required: true
              - _bookshop_name: generic/form/text-input
                _name: UUID
                label: Full name
                required: true
            tandc_checkbox:
              _bookshop_name: generic/form/checkbox-input
              _name: 0745bad3-7c43-4d5c-9b6c-21c78d7b6634
              label: I agree to the code of conduct
              checked: false
              required: false
            submit_button:
              _bookshop_name: generic/button
              label: Register
              id:
              view_label_icon: true
              border_color: border-pink
              add_modal: false
              open_modal: false
              modal:
---
