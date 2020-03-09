{% set delim = "#" * cookiecutter.www_name|length -%}
{{ delim }}
{{ cookiecutter.www_name }}
{{ delim }}

This is the {{ cookiecutter.www_name }} web site.


====================
Development Workflow
====================

.. _Node.js: https://nodejs.org

The development machine must have `Node.js`_ installed.


Install NPM packages:

.. code-block:: console

  $ npm install


Build output files. In ``devel`` mode, files are rebuilt automatically when the
TypeScript source changes, and output is left unminified to make debugging
easier.

.. code-block:: console

  $ npm run watch


Run tests:

.. code-block:: console

  $ npm run test
