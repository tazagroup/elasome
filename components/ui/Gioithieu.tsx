import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import * as React from "react"

export function Gioithieu() {
  return (
    <Box
    component="div"
    sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2, p: 0, m: 0 }}
  >
    <Card component="div" sx={{ maxWidth: 300, flexGrow: 1, border:0 }}>
    H.Derma – Độc quyền mang Elasome, thương hiệu nội địa Hàn Quốc, đến Việt Nam

H.Derma tự hào phân phối độc quyền Elasome – thương hiệu mỹ phẩm nội địa Hàn Quốc, được tin dùng tại các bệnh viện và thẩm mỹ viện hàng đầu. Phát triển dựa trên nghiên cứu chuyên sâu từ các chuyên gia da liễu, Elasome không chỉ đáp ứng tiêu chuẩn khắt khe của xứ sở làm đẹp mà còn đặc biệt phù hợp với làn da Việt Nam.

Khám phá ngay để cảm nhận sự khác biệt và hiệu quả vượt trội!
XEM THÊM
    </Card>

    <Card component="div" sx={{ flexGrow: 1 }}>
      <CardCover>
        <video
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
      </CardCover>
      <CardContent>
        <Typography
          level="body-lg"
          textColor="#fff"
          sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
        >
          Video
        </Typography>
      </CardContent>
    </Card>
  </Box>
  )
}
