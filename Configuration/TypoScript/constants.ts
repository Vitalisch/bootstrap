
plugin.tx_cashcourse_cashcourse {
  view {
    # cat=plugin.tx_cashcourse_cashcourse/file; type=string; label=Path to template root (FE)
    templateRootPath = EXT:cashcourse/Resources/Private/Templates/
    # cat=plugin.tx_cashcourse_cashcourse/file; type=string; label=Path to template partials (FE)
    partialRootPath = EXT:cashcourse/Resources/Private/Partials/
    # cat=plugin.tx_cashcourse_cashcourse/file; type=string; label=Path to template layouts (FE)
    layoutRootPath = EXT:cashcourse/Resources/Private/Layouts/
  }
  persistence {
    # cat=plugin.tx_cashcourse_cashcourse//a; type=string; label=Default storage PID
    storagePid =
  }
}
