/**
 * @module      CLR multi language labels
 * @classdesc   ...
 * @param       {array} - Dependencies
 * @param       {function} - Anonymous function
 * @return      Return an array with the definition properties
 * @version     @@QlikTool-Replace:version
 * @copyright   Qlik 2015
 * @author      @@QlikTool-Replace:author.name <@@QlikTool-Replace:author.email>
 */

    $(function () {
      $.widget("custom.iconselectmenu", $.ui.selectmenu, {
        _renderItem: function (ul, item) {
          var li = $("<li>", { text: item.label });

          if (item.disabled) {
            li.addClass("ui-state-disabled");
          }

          $("<span>", {
            style: item.element.attr("data-style"),
            "class": "ui-icon " + item.element.attr("data-class")
          })
            .appendTo(li);

          return li.appendTo(ul);
        }
      });

      $("#people")
        .iconselectmenu()
        .iconselectmenu("menuWidget")
          .addClass("ui-menu-icons avatar");
    });
