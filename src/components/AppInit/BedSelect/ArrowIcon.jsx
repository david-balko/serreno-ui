import { SvgIcon } from "@material-ui/core"
import { inject, observer } from "mobx-react";

export const ArrowIcon = inject()(observer((props) =>  {

  return (
      <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <g transform="matrix(0.8, 0, 0, 0.8, -96.000046, -122.400002)">
          <path d="M 16.875 25.1171875  C 17.2135416666667 25.1171875  17.5065104166667 24.9934895833333  17.75390625 24.74609375  L 19.74609375 22.75390625  C 19.9934895833333 22.5065104166667  20.1171875 22.2135416666667  20.1171875 21.875  C 20.1171875 21.5364583333333  19.9934895833333 21.2434895833333  19.74609375 20.99609375  L 13.75 15  L 19.74609375 9.00390625  C 19.9934895833333 8.75651041666666  20.1171875 8.46354166666666  20.1171875 8.125  C 20.1171875 7.78645833333333  19.9934895833333 7.49348958333333  19.74609375 7.24609375  L 17.75390625 5.25390625  C 17.5065104166667 5.00651041666666  17.2135416666667 4.8828125  16.875 4.8828125  C 16.5364583333333 4.8828125  16.2434895833333 5.00651041666666  15.99609375 5.25390625  L 7.12890625 14.12109375  C 6.88151041666667 14.3684895833333  6.7578125 14.6614583333333  6.7578125 15  C 6.7578125 15.3385416666667  6.88151041666667 15.6315104166667  7.12890625 15.87890625  L 15.99609375 24.74609375  C 16.2434895833333 24.9934895833333  16.5364583333333 25.1171875  16.875 25.1171875  Z M 27.98828125 7.470703125  C 29.3294270833333 9.76888020833333  30 12.2786458333333  30 15  C 30 17.7213541666667  29.3294270833333 20.2311197916667  27.98828125 22.529296875  C 26.6471354166667 24.8274739583333  24.8274739583333 26.6471354166667  22.529296875 27.98828125  C 20.2311197916667 29.3294270833333  17.7213541666667 30  15 30  C 12.2786458333333 30  9.76888020833333 29.3294270833333  7.470703125 27.98828125  C 5.17252604166667 26.6471354166667  3.35286458333333 24.8274739583333  2.01171875 22.529296875  C 0.670572916666667 20.2311197916667  0 17.7213541666667  0 15  C 0 12.2786458333333  0.670572916666667 9.76888020833333  2.01171875 7.470703125  C 3.35286458333333 5.17252604166667  5.17252604166667 3.35286458333333  7.470703125 2.01171875  C 9.76888020833333 0.670572916666664  12.2786458333333 0  15 0  C 17.7213541666667 0  20.2311197916667 0.670572916666664  22.529296875 2.01171875  C 24.8274739583333 3.35286458333333  26.6471354166667 5.17252604166667  27.98828125 7.470703125  Z " fillRule="nonzero" fill="#555555" stroke="none" transform="matrix(1 0 0 1 120 153 )"/>
        </g>
      </SvgIcon>
  )
}))