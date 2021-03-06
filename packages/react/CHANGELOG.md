# @gqless/react

## 1.0.0-alpha.31

### Patch Changes

- Updated dependencies [15562f4]
  - gqless@1.0.0-alpha.31

## 0.0.1-alpha.30

### Patch Changes

- 2195893: Changes some stuff to allow for easier debugging.

## 0.0.1-alpha.28

### Patch Changes

- 6d08437: Fixed https://github.com/samdenty/gqless/issues/54

## 0.0.1-alpha.27

### Patch Changes

- Release packages
- Updated dependencies [undefined]
  - gqless@0.0.1-alpha.27

## 0.0.1-alpha.26

### Patch Changes

- da2ae6e: re-release
- Updated dependencies [da2ae6e]
  - gqless@0.0.1-alpha.26

## 0.0.1-alpha.25

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
