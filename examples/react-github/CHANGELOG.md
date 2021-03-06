# react-github

## 0.0.1-alpha.27

### Patch Changes

- Updated dependencies [15562f4]
  - gqless@1.0.0-alpha.31
  - @gqless/cli@1.0.0-alpha.33
  - @gqless/logger@1.0.0-alpha.28
  - @gqless/react@1.0.0-alpha.31

## 0.0.1-alpha.26

### Patch Changes

- 689ebdb: **Cache**

  - Support for Keys
    - They can now be used circularly
  - Support for partial merging

  **Optimizations**

  - Heavily reduced cost of merging to cache
  - Extension instances are now shared
  - Internal lazy intialized & memoized changes

  **Fixes**

  - Scheduler is now smarter, works reliably with concurrent mode
  - Fragments containing selections with arguments now work- Updated dependencies [689ebdb]
  - gqless@0.0.1-alpha.25
  - @gqless/cli@0.0.1-alpha.26
  - @gqless/logger@0.0.1-alpha.25
  - @gqless/react@0.0.1-alpha.25
