import * as React from "react"
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import medical from "../../public/medical.png"
import Person from "@mui/icons-material/Person";

export function Iconkeyword() {
  return (
  <div className="grid grid-cols-4 gap-4">
   <Card orientation="horizontal" variant="outlined">
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
           <Person fontSize="large" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
        100% SẢN PHẨM NỘI ĐỊA
        </Typography>
        <Typography level="body-sm"> TIN CẬY HÀNG ĐẦU</Typography>
      </CardContent>
    </Card>
   <Card orientation="horizontal" variant="outlined">
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
           <Person fontSize="large" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
         ĐỘT PHÁ
        </Typography>
        <Typography level="body-sm"> CÔNG NGHỆ KÉP 2IN1</Typography>
      </CardContent>
    </Card>
   <Card orientation="horizontal" variant="outlined">
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
           <Person fontSize="large" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
        100% SẢN PHẨM NỘI ĐỊA
        </Typography>
        <Typography level="body-sm"> TIN CẬY HÀNG ĐẦU</Typography>
      </CardContent>
    </Card>
   <Card orientation="horizontal" variant="outlined">
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
           <Person fontSize="large" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
        100% SẢN PHẨM NỘI ĐỊA
        </Typography>
        <Typography level="body-sm"> TIN CẬY HÀNG ĐẦU</Typography>
      </CardContent>
    </Card>
    </div>
  )
}
