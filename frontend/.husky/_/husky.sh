#!/usr/bin/env sh
# Simplified husky hook helper

if [ -z "$husky_skip_init" ]; then
  debug () {
    if [ "$HUSKY_DEBUG" = "1" ]; then
      echo "husky (debug) - $1"
    fi
  }

  readonly hook_name="$(basename -- "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi

  readonly husky_execute=".husky/_/husky-run.js"
  export readonly husky_skip_init=1
  script_path="$0"
  shift

  # Check if script exists
  if [ -f "$husky_execute" ]; then
    if [ -z "$HUSKY_SKIP_HOOKS" ]; then
      # Allow to run from any directory
      cd "$(dirname "$script_path")/../.." || exit
      sh -e "$husky_execute" "$hook_name" "$@"
    else
      debug "HUSKY_SKIP_HOOKS is set, skipping hook"
    fi
  else
    debug "file not found, skipping..."
  fi
fi 