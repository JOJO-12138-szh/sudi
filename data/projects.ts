// 🛡️ 本文件由控制台自动生成，请勿手动修改

export type Project = {
  id: string;
  name: string;
  description: string;
  icon: string;
  githubUrl: string;
  tags: string[];
};

export const projectsData: Project[] = [
  {
    "id": "proj_1787988429372",
    "name": "高性能 HTTP 静态服务器",
    "githubUrl": "https://github.com/JOJO-12138-szh/htt",
    "description": "1.使用 epoll IO 多路复用 + 非阻塞 Socket，单线程管理并发连接，避免多线程锁竞争\n2.深入对比 水平触发（LT）与边缘触发（ET），选择 ET + 非阻塞模式提升吞吐量\n3.实现 HTTP Range 断点续传，支持 206 Partial Content，适配视频拖拽播放场景\n4.手动实现 MIME 类型映射，支持 .html、.css、.js、.png、.jpg 等常见格式\n5.实现目录请求自动生成 HTML 索引页面，支持文件列表展示与返回上一级导航\n6.使用 sendfile() 零拷贝优化大文件传输（如有实现可写）\n7.自定义实现 404 错误页面与 Keep-Alive 长连接支持",
    "icon": "🚀",
    "tags": [
      "C、Socket 编程、Epoll、非阻塞 I/O、HTTP/1.1"
    ]
  },
  {
    "id": "proj_1787217134374",
    "name": "传感器监控",
    "githubUrl": "https://github.com/JOJO-12138-szh/cpu_monitor",
    "description": "定义CPU采样数据结构（CPU标识、使用率、时间戳），设计并实现定长环形缓冲区，通过头尾指针和元素计数实现循环复用，避免频繁内存分配\n\n实现线程安全的生产者-消费者模型：生产者写入数据时互斥保护，队列满时立即返回（不阻塞采样线程）；消费者支持阻塞等待和超时返回两种模式\n\n使用 互斥锁（pthread_mutex_t） 保护缓冲区的所有操作，使用条件变量（pthread_cond_t） 实现消费者在队列为空时释放CPU、有数据时被唤醒的高效等待机制\n\n设计 “双阈值”批量取出策略：消费者可设定最多取出条数（max）和最长等待时间（timeout_ms），任一条件满足即返回，平衡实时性与吞吐量\n\n实现完整的资源管理：初始化时分配内存，销毁时释放锁、条件变量和缓冲区，避免资源泄漏",
    "icon": "🚀",
    "tags": [
      "C、Linux系统编程、多线程、互斥锁、条件变量、环形缓冲区、时间序列采样"
    ]
  },
  {
    "id": "proj_1786950956182",
    "name": "STM32小车开发",
    "githubUrl": "https://github.com/JOJO-12138-szh/STM32",
    "description": "1.建立四轮独立驱动控制模型，通过四路PWM分别控制四个麦克纳姆轮，结合运动学解算，实现原地旋转、横向平移、斜向移动等全向运动模式\n2.设计双路红外传感器循迹算法，采用有限状态机（FSM）决策架构，将传感器信号映射为差速控制指令，使小车沿指定路径稳定行驶\n3.集成红外避障功能，通过GPIO中断实时检测障碍物信号，实现自主避障与路径重规划\n4.通过蓝牙串口与手机APP通信，实现遥控/自主双模式切换与实时状态监控\n",
    "icon": "🚀",
    "tags": [
      "STM32、C、蓝牙串口通信、PWM、GPIO、有限状态机（FSM）"
    ]
  },
  {
    "id": "proj_1786780481033",
    "name": "打印机程序",
    "githubUrl": "https://github.com/JOJO-12138-szh/dayingji",
    "description": "1.使用最小堆（Min-Heap）实现优先队列，以 O(log n) 时间复杂度完成任务插入和取出\n2.设计三级优先级调度算法：先按用户优先级（1-10），再按页数（短作业优先），最后按提交时间（FIFO），兼顾公平性与效率\n3.实现动态扩容/缩容机制：队列满时自动扩容至 2 倍，使用率低于 25% 时自动缩容，平衡内存与性能\n4.提供完整任务管理功能：提交任务、执行打印（取出堆顶）、查看所有任务（堆排序输出）、撤销任务（O(n)查找 + O(log n)调整）、调整优先级\n5.实现 O(n) 建堆优化：查看所有任务时，临时复制堆数据并原地建堆，不破坏原堆结构\n6.实现任务撤销后的堆自愈：根据优先级变化方向选择上浮（siftUp）或下沉（heapify）调整，维护堆性质",
    "icon": "🚀",
    "tags": [
      "C、动态数组、最小堆、优先队列、动态内存管理、Linux时间库"
    ]
  }
];