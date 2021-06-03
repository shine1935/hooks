/**
 *  和useEffect功效一致
 * 
 * 区别：
 * 1.会在所有的DOM变更之后同步调用Effect
 * 2.使用它来读取DOM布局并同步触发重渲染。在浏览器执行重绘之前，useLayoutEffect内部的更新计划将同步更新
 * 
 * Tips:
 * 尽可能的使用标准的useEffect,以避免阻塞视觉更新
 */

